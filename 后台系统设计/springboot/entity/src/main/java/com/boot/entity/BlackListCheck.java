package com.boot.entity;

import java.io.Serializable;

public class BlackListCheck implements Serializable {
    private Integer blacklistCheckId;
    private Integer blacklistId;
    private Integer auditorId;
    private String auditStatus;
    private String auditInfo;
    private Long auditTime;

    public Integer getBlacklistCheckId() {
        return blacklistCheckId;
    }

    public void setBlacklistCheckId(Integer blacklistCheckId) {
        this.blacklistCheckId = blacklistCheckId;
    }

    public Integer getBlacklistId() {
        return blacklistId;
    }

    public void setBlacklistId(Integer blacklistId) {
        this.blacklistId = blacklistId;
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
        return "BlackListCheck{" +
                "blacklistCheckId=" + blacklistCheckId +
                ", blacklistId=" + blacklistId +
                ", auditorId=" + auditorId +
                ", auditStatus='" + auditStatus + '\'' +
                ", auditInfo='" + auditInfo + '\'' +
                ", auditTime=" + auditTime +
                '}';
    }
}
