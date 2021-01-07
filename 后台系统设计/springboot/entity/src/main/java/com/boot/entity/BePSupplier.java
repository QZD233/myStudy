package com.boot.entity;

import java.io.Serializable;

public class BePSupplier implements Serializable {
    private Integer pSId;
    private Integer supplierId;
    private Integer companyId;
    private Long applyTime;
    private String auditStatus;
    private Long auditTime;
    private String supplierType;

    public Integer getpSId() {
        return pSId;
    }

    public void setpSId(Integer pSId) {
        this.pSId = pSId;
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
        return "BePSupplier{" +
                "pSId=" + pSId +
                ", supplierId=" + supplierId +
                ", companyId=" + companyId +
                ", applyTime=" + applyTime +
                ", auditStatus='" + auditStatus + '\'' +
                ", auditTime=" + auditTime +
                ", supplierType='" + supplierType + '\'' +
                '}';
    }
}
