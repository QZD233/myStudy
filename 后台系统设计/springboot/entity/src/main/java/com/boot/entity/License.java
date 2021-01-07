package com.boot.entity;

import java.io.Serializable;

public class License implements Serializable {
    private Integer supplierId;
    private String licenseNo;
    private String licenseUrl;
    private String taxRegisterNo;
    private String taxRegisterUrl;
    private String agencyNo;
    private String agencyUrl;
    private String accountBank;
    private Long accountNo;
    private String legalName;
    private String legalUrl;
    private String ccr;
    private String tsc;
    private String supplierIntroduction;
    private String performance;

    public Integer getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(Integer supplierId) {
        this.supplierId = supplierId;
    }

    public String getLicenseNo() {
        return licenseNo;
    }

    public void setLicenseNo(String licenseNo) {
        this.licenseNo = licenseNo;
    }

    public String getLicenseUrl() {
        return licenseUrl;
    }

    public void setLicenseUrl(String licenseUrl) {
        this.licenseUrl = licenseUrl;
    }

    public String getTaxRegisterNo() {
        return taxRegisterNo;
    }

    public void setTaxRegisterNo(String taxRegisterNo) {
        this.taxRegisterNo = taxRegisterNo;
    }

    public String getTaxRegisterUrl() {
        return taxRegisterUrl;
    }

    public void setTaxRegisterUrl(String taxRegisterUrl) {
        this.taxRegisterUrl = taxRegisterUrl;
    }

    public String getAgencyNo() {
        return agencyNo;
    }

    public void setAgencyNo(String agencyNo) {
        this.agencyNo = agencyNo;
    }

    public String getAgencyUrl() {
        return agencyUrl;
    }

    public void setAgencyUrl(String agencyUrl) {
        this.agencyUrl = agencyUrl;
    }

    public String getAccountBank() {
        return accountBank;
    }

    public void setAccountBank(String accountBank) {
        this.accountBank = accountBank;
    }

    public String getLegalName() {
        return legalName;
    }

    public void setLegalName(String legalName) {
        this.legalName = legalName;
    }

    public String getLegalUrl() {
        return legalUrl;
    }

    public void setLegalUrl(String legalUrl) {
        this.legalUrl = legalUrl;
    }

    public String getCcr() {
        return ccr;
    }

    public void setCcr(String ccr) {
        this.ccr = ccr;
    }

    public String getTsc() {
        return tsc;
    }

    public void setTsc(String tsc) {
        this.tsc = tsc;
    }

    public String getSupplierIntroduction() {
        return supplierIntroduction;
    }

    public void setSupplierIntroduction(String supplierIntroduction) {
        this.supplierIntroduction = supplierIntroduction;
    }

    public String getPerformance() {
        return performance;
    }

    public void setPerformance(String performance) {
        this.performance = performance;
    }

    @Override
    public String toString() {
        return "License{" +
                "supplierId=" + supplierId +
                ", licenseNo='" + licenseNo + '\'' +
                ", licenseUrl='" + licenseUrl + '\'' +
                ", taxRegisterNo='" + taxRegisterNo + '\'' +
                ", taxRegisterUrl='" + taxRegisterUrl + '\'' +
                ", agencyNo='" + agencyNo + '\'' +
                ", agencyUrl='" + agencyUrl + '\'' +
                ", accountBank='" + accountBank + '\'' +
                ", accountNo='"+accountNo+'\''+
                ", legalName='" + legalName + '\'' +
                ", legalUrl='" + legalUrl + '\'' +
                ", ccr='" + ccr + '\'' +
                ", tsc='" + tsc + '\'' +
                ", supplierIntroduction='" + supplierIntroduction + '\'' +
                ", performance='" + performance + '\'' +
                '}';
    }

    public Long getAccountNo() {
        return accountNo;
    }

    public void setAccountNo(Long accountNo) {
        this.accountNo = accountNo;
    }
}
