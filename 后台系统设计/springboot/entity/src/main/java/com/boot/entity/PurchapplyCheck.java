package com.boot.entity;

import java.io.Serializable;

public class PurchapplyCheck implements Serializable {
    private Integer purchapplyCheckId;
    private Integer purchapplyId;
    private Integer operatorId;
    private Integer companyId;
    private String operation;
    private String checkOpinion;
    private Long operationTime;
    private String checkRemark;

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }
    public Integer getPurchapplyCheckId() {
        return purchapplyCheckId;
    }

    public void setPurchapplyCheckId(Integer purchapplyCheckId) {
        this.purchapplyCheckId = purchapplyCheckId;
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
        return "PurchapplyCheck{" +
                "purchapplyCheckId=" + purchapplyCheckId +
                ", purchapplyId=" + purchapplyId +
                ", operatorId='" + operatorId + '\'' +
                ", companyId=" + companyId +
                ", operation='" + operation + '\'' +
                ", checkOpinion='" + checkOpinion + '\'' +
                ", operationTime=" + operationTime +
                ", checkRemark='" + checkRemark + '\'' +
                '}';
    }
}
