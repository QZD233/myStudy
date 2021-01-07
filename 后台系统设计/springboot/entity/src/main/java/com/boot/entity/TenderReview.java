package com.boot.entity;

import java.io.Serializable;

public class TenderReview implements Serializable {
    private Integer tenderReviewId;
    private Integer purchapplyId;
    private Integer operatorId;
    private Integer tenderId;
    private String operation;
    private String checkOpinion;
    private Long operationTime;
    private String checkRemark;

    public Integer getTenderReviewId() {
        return tenderReviewId;
    }

    public void setTenderReviewId(Integer tenderReviewId) {
        this.tenderReviewId = tenderReviewId;
    }

    public Integer getPurchapplyId() {
        return purchapplyId;
    }

    public void setPurchapplyId(Integer purchapplyId) {
        this.purchapplyId = purchapplyId;
    }

    public Integer getOperatorId() {
        return operatorId;
    }

    public void setOperatorId(Integer operatorId) {
        this.operatorId = operatorId;
    }

    public Integer getTenderId() {
        return tenderId;
    }

    public void setTenderId(Integer tenderId) {
        this.tenderId = tenderId;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public String getCheckOpinion() {
        return checkOpinion;
    }

    public void setCheckOpinion(String checkOpinion) {
        this.checkOpinion = checkOpinion;
    }

    public Long getOperationTime() {
        return operationTime;
    }

    public void setOperationTime(Long operationTime) {
        this.operationTime = operationTime;
    }

    public String getCheckRemark() {
        return checkRemark;
    }

    public void setCheckRemark(String checkRemark) {
        this.checkRemark = checkRemark;
    }

    @Override
    public String toString() {
        return "TenderReview{" +
                "tenderReviewId=" + tenderReviewId +
                ", purchapplyId=" + purchapplyId +
                ", operatorId=" + operatorId +
                ", tenderId=" + tenderId +
                ", operation='" + operation + '\'' +
                ", checkOpinion='" + checkOpinion + '\'' +
                ", operationTime=" + operationTime +
                ", checkRemark='" + checkRemark + '\'' +
                '}';
    }
}
