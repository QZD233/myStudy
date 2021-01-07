package com.boot.entity;

import java.io.Serializable;

public class CSCheck implements Serializable {
    private Integer cSCheckId;
    private Integer cSId;
    private Integer auditorId;
    private String auditStatus;
    private String auditInfo;
    private Long auditTime;

    public Integer getcSCheckId() {
        return cSCheckId;
    }

    public void setcSCheckId(Integer cSCheckId) {
        this.cSCheckId = cSCheckId;
    }

    public Integer getcSId() {
        return cSId;
    }

    public void setcSId(Integer cSId) {
        this.cSId = cSId;
    }

    public Integer getAuditorId() {
        return auditorId;
    }

    public void setAuditorId(Integer auditorId) {
        this.auditorId = auditorId;
    }

    public String getAuditStatus() {
        return auditStatus;
    }

    public void setAuditStatus(String auditStatus) {
        this.auditStatus = auditStatus;
    }

    public String getAuditInfo() {
        return auditInfo;
    }

    public void setAuditInfo(String auditInfo) {
        this.auditInfo = auditInfo;
    }

    public Long getAuditTime() {
        return auditTime;
    }

    public void setAuditTime(Long auditTime) {
        this.auditTime = auditTime;
    }

    @Override
    public String toString() {
        return "CSCheck{" +
                "cSCheckId=" + cSCheckId +
                ", cSId=" + cSId +
                ", auditorId=" + auditorId +
                ", auditStatus='" + auditStatus + '\'' +
                ", auditInfo='" + auditInfo + '\'' +
                ", auditTime=" + auditTime +
                '}';
    }
}
