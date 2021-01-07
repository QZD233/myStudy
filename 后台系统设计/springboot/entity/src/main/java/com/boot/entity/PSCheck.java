package com.boot.entity;

import java.io.Serializable;

public class PSCheck implements Serializable {
    private Integer pSCheckId;
    private Integer pSId;
    private Integer auditorId;
    private String quaScope;
    private String auditInfo;
    private String auditStatus;
    private Long auditTime;

    public Integer getpSCheckId() {
        return pSCheckId;
    }

    public void setpSCheckId(Integer pSCheckId) {
        this.pSCheckId = pSCheckId;
    }

    public Integer getpSId() {
        return pSId;
    }

    public void setpSId(Integer pSId) {
        this.pSId = pSId;
    }

    public Integer getAuditorId() {
        return auditorId;
    }

    public void setAuditorId(Integer auditorId) {
        this.auditorId = auditorId;
    }

    public String getQuaScope() {
        return quaScope;
    }

    public void setQuaScope(String quaScope) {
        this.quaScope = quaScope;
    }

    public String getAuditInfo() {
        return auditInfo;
    }

    public void setAuditInfo(String auditInfo) {
        this.auditInfo = auditInfo;
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
        return "PSCheck{" +
                "pSCheckId=" + pSCheckId +
                ", pSId=" + pSId +
                ", auditorId=" + auditorId +
                ", quaScope='" + quaScope + '\'' +
                ", auditInfo='" + auditInfo + '\'' +
                ", auditStatus='" + auditStatus + '\'' +
                ", auditTime=" + auditTime +
                '}';
    }
}
