package com.boot.entity;

import java.io.Serializable;

public class MonthlyScore implements Serializable {
    private Integer scoreId;
    private Integer companyId;
    private Integer supplierId;
    private Integer years;
    private Integer months;
    private Float shipments;
    private Float score;

    public Integer getScoreId() {
        return scoreId;
    }

    public void setScoreId(Integer scoreId) {
        this.scoreId = scoreId;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public Integer getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(Integer supplierId) {
        this.supplierId = supplierId;
    }

    public Integer getYears() {
        return years;
    }

    public void setYears(Integer years) {
        this.years = years;
    }

    public Integer getMonths() {
        return months;
    }

    public void setMonths(Integer months) {
        this.months = months;
    }

    public Float getShipments() {
        return shipments;
    }

    public void setShipments(Float shipments) {
        this.shipments = shipments;
    }

    public Float getScore() {
        return score;
    }

    public void setScore(Float score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "MonthlyScore{" +
                "scoreId=" + scoreId +
                ", companyId=" + companyId +
                ", supplierId=" + supplierId +
                ", years=" + years +
                ", months=" + months +
                ", shipments=" + shipments +
                ", score=" + score +
                '}';
    }
}
