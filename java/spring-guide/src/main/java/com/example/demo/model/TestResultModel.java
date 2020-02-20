package com.example.demo.model;

public class TestResultModel {

	private String payerAccount;
	
	private String productCode;
	
	private String lineItemDescription;
	
	private Double unBlendedCost;

	public String getPayerAccount() {
		return payerAccount;
	}

	public void setPayerAccount(String payerAccount) {
		this.payerAccount = payerAccount;
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getLineItemDescription() {
		return lineItemDescription;
	}

	public void setLineItemDescription(String lineItemDescription) {
		this.lineItemDescription = lineItemDescription;
	}

	public Double getUnBlendedCost() {
		return unBlendedCost;
	}

	public void setUnBlendedCost(Double unBlendedCost) {
		this.unBlendedCost = unBlendedCost;
	}
}
