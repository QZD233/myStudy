package com.boot.entity;

import java.io.Serializable;

public class Purchapply implements Serializable {
    private Integer purchapplyId;
    private String documentNumber;
    private String coalType;
    private Integer calorieValue;
    private Float procureCount;
    private String approvalStatus;
    private Long approvalTime;

    public Long getApprovalTime() {
        return approvalTime;
    }

    public void setApprovalTime(Long approvalTime) {
        this.approvalTime = approvalTime;
    }

    public Integer getPurchapplyId() {
        return purchapplyId;
    }

    public void setPurchapplyId(Integer purchapplyId) {
        this.purchapplyId = purchapplyId;
    }

    public String getDocumentNumber() {
        return documentNumber;
    }

    public void setDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
    }

    public String getCoalType() {
        return coalType;
    }

    public void setCoalType(String coalType) {
        this.coalType = coalType;
    }

    public Integer getCalorieValue() {
        return calorieValue;
    }

    public void setCalorieValue(Integer calorieValue) {
        this.calorieValue = calorieValue;
    }

    public Float getProcureCount() {
        return procureCount;
    }

    public void setProcureCount(Float procureCount) {
        this.procureCount = procureCount;
    }

    public String getApprovalStatus() {
        return approvalStatus;
    }

    public void setApprovalStatus(String approvalStatus) {
        this.approvalStatus = approvalStatus;
    }

    @Override
    public String toString() {
        return "Purchapply{" +
                "purchapplyId=" + purchapplyId +
                ", documentNumber='" + documentNumber + '\'' +
                ", coalType='" + coalType + '\'' +
                ", calorieValue=" + calorieValue +
                ", procureCount=" + procureCount +
                ", approvalStatus='" + approvalStatus + '\'' +
                ", approvalTime=" + approvalTime +
                '}';
    }

}
