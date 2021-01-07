package com.boot.entity;

import java.io.Serializable;

public class PurchapplyDetail implements Serializable {
    private Integer purchapplyId;
    private Integer companyId;
    private Integer applicantId;
    private Integer signerId;
    private Long createDate;
    private Long deadline;

    private Long jhTime;
    private Long jhDeadline;
    private String coalClass;
    private String yunShuMode;
    private String jiaoHuoMode;
    private String jieSuanMode;
    private String yanShouMode;
    private Float maxLimitPrice;
    private Float minLimitPrice;
    private String remark;
    private String payMode;

    private Integer quoteBond;
    private Float quoteBondNmber;
    private Integer performBond;
    private Float performBondNmber;
    private String bondRemark;

    public Integer getPurchapplyId() {
        return purchapplyId;
    }

    public void setPurchapplyId(Integer purchapplyId) {
        this.purchapplyId = purchapplyId;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public Integer getApplicantId() {
        return applicantId;
    }

    public void setApplicantId(Integer applicantId) {
        this.applicantId = applicantId;
    }

    public Integer getSignerId() {
        return signerId;
    }

    public void setSignerId(Integer signerId) {
        this.signerId = signerId;
    }

    public Long getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Long createDate) {
        this.createDate = createDate;
    }

    public Long getDeadline() {
        return deadline;
    }

    public void setDeadline(Long deadline) {
        this.deadline = deadline;
    }

    public Long getJhTime() {
        return jhTime;
    }

    public void setJhTime(Long jhTime) {
        this.jhTime = jhTime;
    }

    public Long getJhDeadline() {
        return jhDeadline;
    }

    public void setJhDeadline(Long jhDeadline) {
        this.jhDeadline = jhDeadline;
    }

    public String getCoalClass() {
        return coalClass;
    }

    public void setCoalClass(String coalClass) {
        this.coalClass = coalClass;
    }

    public String getYunShuMode() {
        return yunShuMode;
    }

    public void setYunShuMode(String yunShuMode) {
        this.yunShuMode = yunShuMode;
    }

    public String getJiaoHuoMode() {
        return jiaoHuoMode;
    }

    public void setJiaoHuoMode(String jiaoHuoMode) {
        this.jiaoHuoMode = jiaoHuoMode;
    }

    public String getJieSuanMode() {
        return jieSuanMode;
    }

    public void setJieSuanMode(String jieSuanMode) {
        this.jieSuanMode = jieSuanMode;
    }

    public String getYanShouMode() {
        return yanShouMode;
    }

    public void setYanShouMode(String yanShouMode) {
        this.yanShouMode = yanShouMode;
    }

    public Float getMaxLimitPrice() {
        return maxLimitPrice;
    }

    public void setMaxLimitPrice(Float maxLimitPrice) {
        this.maxLimitPrice = maxLimitPrice;
    }

    public Float getMinLimitPrice() {
        return minLimitPrice;
    }

    public void setMinLimitPrice(Float minLimitPrice) {
        this.minLimitPrice = minLimitPrice;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getPayMode() {
        return payMode;
    }

    public void setPayMode(String payMode) {
        this.payMode = payMode;
    }

    public Integer getQuoteBond() {
        return quoteBond;
    }

    public void setQuoteBond(Integer quoteBond) {
        this.quoteBond = quoteBond;
    }

    public Float getQuoteBondNmber() {
        return quoteBondNmber;
    }

    public void setQuoteBondNmber(Float quoteBondNmber) {
        this.quoteBondNmber = quoteBondNmber;
    }

    public Integer getPerformBond() {
        return performBond;
    }

    public void setPerformBond(Integer performBond) {
        this.performBond = performBond;
    }

    public Float getPerformBondNmber() {
        return performBondNmber;
    }

    public void setPerformBondNmber(Float performBondNmber) {
        this.performBondNmber = performBondNmber;
    }

    public String getBondRemark() {
        return bondRemark;
    }

    public void setBondRemark(String bondRemark) {
        this.bondRemark = bondRemark;
    }

    @Override
    public String toString() {
        return "PurchapplyDetail{" +
                "purchapplyId=" + purchapplyId +
                ", companyId=" + companyId +
                ", applicantId=" + applicantId +
                ", signerId=" + signerId +
                ", createDate=" + createDate +
                ", deadline=" + deadline +
                ", jhTime=" + jhTime +
                ", jhDeadline=" + jhDeadline +
                ", coalClass='" + coalClass + '\'' +
                ", yunShuMode='" + yunShuMode + '\'' +
                ", jiaoHuoMode='" + jiaoHuoMode + '\'' +
                ", jieSuanMode='" + jieSuanMode + '\'' +
                ", yanShouMode='" + yanShouMode + '\'' +
                ", maxLimitPrice=" + maxLimitPrice +
                ", minLimitPrice=" + minLimitPrice +
                ", remark='" + remark + '\'' +
                ", payMode='" + payMode + '\'' +
                ", quoteBond=" + quoteBond +
                ", quoteBondNmber=" + quoteBondNmber +
                ", performBond=" + performBond +
                ", performBondNmber=" + performBondNmber +
                ", bondRemark='" + bondRemark + '\'' +
                '}';
    }
}
