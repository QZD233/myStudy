package com.boot.entity;

import java.io.Serializable;

public class PowerPlantSupplier implements Serializable {
    private Integer pasId;
    private Integer companyId;
    private Integer supplierId;
    private String supplierType;
    private Long cooperationTime;
    private Integer black;

    public Integer getPasId() {
        return pasId;
    }

    public void setPasId(Integer pasId) {
        this.pasId = pasId;
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

    public Long getCooperationTime() {
        return cooperationTime;
    }

    public void setCooperationTime(Long cooperationTime) {
        this.cooperationTime = cooperationTime;
    }

    @Override
    public String toString() {
        return "PowerPlantSupplier{" +
                "pasId=" + pasId +
                ", companyId=" + companyId +
                ", supplierId=" + supplierId +
                ", supplierType='" + supplierType + '\'' +
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
