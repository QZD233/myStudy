package com.boot.entity;

import java.io.Serializable;

public class Tender implements Serializable {
    private Integer tenderId;
    private Integer purchapplyId;
    private Integer supplierId;
    private Long tenderTime;
    private Float supplyCount;
    private Integer calorieValue;
    private Float coalPrice;
    private Float ts;
    private String origin;
    private Float shipping;
    private Float volatileS;
    private Float volatileD;
    private String station;
    private Float baAd;
    private Float moisture;
    private String tenderStatus;
    private Long auditTime;

    public Integer getTenderId() {
        return tenderId;
    }

    public void setTenderId(Integer tenderId) {
        this.tenderId = tenderId;
    }

    public Integer getPurchapplyId() {
        return purchapplyId;
    }

    public void setPurchapplyId(Integer purchapplyId) {
        this.purchapplyId = purchapplyId;
    }

    public Integer getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(Integer supplierId) {
        this.supplierId = supplierId;
    }

    public Long getTenderTime() {
        return tenderTime;
    }

    public void setTenderTime(Long tenderTime) {
        this.tenderTime = tenderTime;
    }

    public Float getSupplyCount() {
        return supplyCount;
    }

    public void setSupplyCount(Float supplyCount) {
        this.supplyCount = supplyCount;
    }

    public Integer getCalorieValue() {
        return calorieValue;
    }

    public void setCalorieValue(Integer calorieValue) {
        this.calorieValue = calorieValue;
    }

    public Float getCoalPrice() {
        return coalPrice;
    }

    public void setCoalPrice(Float coalPrice) {
        this.coalPrice = coalPrice;
    }

    public Float getTs() {
        return ts;
    }

    public void setTs(Float ts) {
        this.ts = ts;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public Float getShipping() {
        return shipping;
    }

    public void setShipping(Float shipping) {
        this.shipping = shipping;
    }

    public Float getVolatileS() {
        return volatileS;
    }

    public void setVolatileS(Float volatileS) {
        this.volatileS = volatileS;
    }

    public Float getVolatileD() {
        return volatileD;
    }

    public void setVolatileD(Float volatileD) {
        this.volatileD = volatileD;
    }

    public String getStation() {
        return station;
    }

    public void setStation(String station) {
        this.station = station;
    }

    public Float getBaAd() {
        return baAd;
    }

    public void setBaAd(Float baAd) {
        this.baAd = baAd;
    }

    public Float getMoisture() {
        return moisture;
    }

    public void setMoisture(Float moisture) {
        this.moisture = moisture;
    }

    public String getTenderStatus() {
        return tenderStatus;
    }

    public void setTenderStatus(String tenderStatus) {
        this.tenderStatus = tenderStatus;
    }

    public Long getAuditTime() {
        return auditTime;
    }

    public void setAuditTime(Long auditTime) {
        this.auditTime = auditTime;
    }

    @Override
    public String toString() {
        return "Tender{" +
                "tenderId=" + tenderId +
                ", purchapplyId=" + purchapplyId +
                ", supplierId=" + supplierId +
                ", tenderTime=" + tenderTime +
                ", supplyCount=" + supplyCount +
                ", calorieValue=" + calorieValue +
                ", coalPrice=" + coalPrice +
                ", ts=" + ts +
                ", origin='" + origin + '\'' +
                ", shipping=" + shipping +
                ", volatileS=" + volatileS +
                ", volatileD=" + volatileD +
                ", station='" + station + '\'' +
                ", baAd=" + baAd +
                ", moisture=" + moisture +
                ", tenderStatus='" + tenderStatus + '\'' +
                ", auditTime=" + auditTime +
                '}';
    }
}
