import React, { Component } from 'react';
import helpers from '../helpers';
import config from '../config';
import _ from 'lodash';


class OrderPaid extends Component {
	constructor(props) {
		super(props);

		this.coin = this.props.order.pair.quote;
		this.tx = _.find(this.props.order.transactions, {type: 'D'});
		this.txId = this.tx.tx_id;
	}

	render() {
		if (this.txId == '' || this.txId == null) {
			return (
				<div className="col-xs-12 text-center order-status-section">
					<h2 style={{margin: "0"}}>Processing withdrawal...</h2>
					<a href={`${config.API_BASE_URL}/orders/${this.props.orderRef}`} target="_blank"><h4 style={{margin: "25px 0 0px", "fontWeight": "500"}}>See your order details on our API</h4></a>
				</div>
			)
		}

		return (
			<div id="order-paid" className="col-xs-12 text-center">
				<h2 style={{margin: "0"}}>Funds received</h2>
				<h5>We are now preparing to release your coins</h5>
				<h5>Transaction ID: <a href={helpers.getBlockchainUrl(this.coin.code, this.txId)} target="_blank" className="text-green">{this.txId}</a></h5>

				<a href={`${config.API_BASE_URL}/orders/${this.props.orderRef}`} target="_blank"><h4 style={{margin: "25px 0 0", "fontWeight": "500"}}>See your order details on our API</h4></a>
				<a href={helpers.getBlockchainUrl(this.coin.code, this.txId)} target="_blank"><h4 style={{margin: "5px 0 18px", "fontWeight": "500"}}>See your order details on blockchain</h4></a>
			</div> 
		)
	}

};

export default OrderPaid;
