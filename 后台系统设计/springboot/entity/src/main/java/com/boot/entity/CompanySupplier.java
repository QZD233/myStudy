package com.boot.entity;

import java.io.Serializable;

public class CompanySupplier implements Serializable {
    private Integer casId;
    private Integer companyId;
    private Integer supplierId;
    private String supplierType;
    private String cooperationRange;
    private Long cooperationTime;
    private Integer black;

    public Integer getCasId() {
        return casId;
    }

    public void setCasId(Integer casId) {
        this.casId = casId;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public Integer getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(Integer supplierId) {
        this.supplierId = supplierId;
    }

    public String getSupplierType() {
        return supplierType;
    }

    public void setSupplierType(String supplierType) {
        this.supplierType = supplierType;
    }

    public String getCooperationRange() {
        return cooperationRange;
    }

    public void setCooperationRange(String cooperationRange) {
        this.cooperationRange = cooperationRange;
    }

    public Long getCooperationTime() {
        return cooperationTime;
    }

    public void setCooperationTime(Long cooperationTime) {
        this.cooperationTime = cooperationTime;
    }

    @Override
    public String toString() {
        return "CompanySupplier{" +
                "casId=" + casId +
                ", companyId=" + companyId +
                ", supplierId=" + supplierId +
                ", supplierType='" + supplierType + '\'' +
                ", cooperationRange='" + cooperationRange + '\'' +
                ", cooperationTime=" + cooperationTime +
                ", black=" + black +
                '}';
    }

    public Integer getBlack() {
        return black;
    }

    public void setBlack(Integer black) {
        this.black = black;
    }
}
