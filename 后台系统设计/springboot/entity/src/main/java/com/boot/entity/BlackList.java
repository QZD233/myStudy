package com.boot.entity;

import java.io.Serializable;

public class BlackList implements Serializable {
    private Integer blacklistId;
    private Integer companyId;
    private String applicant;
    private Integer supplierId;
    private String remark;
    private String annex;
    private String auditStatus;
    private Long auditTime;

    public Integer getBlacklistId() {
        return blacklistId;
    }

    public void setBlacklistId(Integer blacklistId) {
        this.blacklistId = blacklistId;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public String getApplicant() {
        return applicant;
    }

    public void setApplicant(String applicant) {
        this.applicant = applicant;
    }

    public Integer getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(Integer supplierId) {
        this.supplierId = supplierId;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getAnnex() {
        return annex;
    }

    public void setAnnex(String annex) {
        this.annex = annex;
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

    @Override
    public String toString() {
        return "BlackList{" +
                "blacklistId=" + blacklistId +
                ", companyId=" + companyId +
                ", applicant='" + applicant + '\'' +
                ", supplierId=" + supplierId +
                ", remark='" + remark + '\'' +
                ", annex='" + annex + '\'' +
                ", auditStatus='" + auditStatus + '\'' +
                ", auditTime=" + auditTime +
                '}';
    }
}
