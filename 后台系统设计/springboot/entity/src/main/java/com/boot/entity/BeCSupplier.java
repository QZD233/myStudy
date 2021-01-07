package com.boot.entity;

import java.io.Serializable;

public class BeCSupplier implements Serializable {
    private Integer cSId;
    private Integer supplierId;
    private Integer companyId;
    private Long applyTime;
    private String auditStatus;
    private Long auditTime;
    private String supplierType;

    public Integer getcSId() {
        return cSId;
    }

    public void setcSId(Integer cSId) {
        this.cSId = cSId;
    }

    public Integer getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(Integer supplierId) {
        this.supplierId = supplierId;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public Long getApplyTime() {
        return applyTime;
    }

    public void setApplyTime(Long applyTime) {
        this.applyTime = applyTime;
    }

    public String getAuditStatus() {
        return auditStatus;
    }

    public void setAuditStatus(String auditStatus) {
        this.auditStatus = auditStatus;
    }

    public Long getAuditTime() {
        return auditTime;
    }

    public void setAuditTime(Long auditTime) {
        this.auditTime = auditTime;
    }

    public String getSupplierType() {
        return supplierType;
    }

    public void setSupplierType(String supplierType) {
        this.supplierType = supplierType;
    }

    @Override
    public String toString() {
        return "BeCSupplier{" +
                "cSId=" + cSId +
                ", supplierId=" + supplierId +
                ", companyId=" + companyId +
                ", applyTime=" + applyTime +
                ", auditStatus='" + auditStatus + '\'' +
                ", auditTime=" + auditTime +
                ", supplierType='" + supplierType + '\'' +
                '}';
    }
}
