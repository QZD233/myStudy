package com.boot.entity;

import java.io.Serializable;

public class CoalQuality implements Serializable {
    private Integer purchapplyId;
    private Float qnetAr;
    private Float stAr;
    private Float moisture;
    private Float aar;
    private Float varS;
    private Float varD;
    private Float mad;
    private Float stAd;
    private Float vadS;
    private Float vadD;
    private Float qgrD;
    private Float stD;
    private Float davS;
    private Float davD;
    private Float mm;
    private Float st;
    private Float hgi;
    private String remark;

    public Integer getPurchapplyId() {
        return purchapplyId;
    }

    public void setPurchapplyId(Integer purchapplyId) {
        this.purchapplyId = purchapplyId;
    }

    public Float getQnetAr() {
        return qnetAr;
    }

    public void setQnetAr(Float qnetAr) {
        this.qnetAr = qnetAr;
    }

    public Float getStAr() {
        return stAr;
    }

    public void setStAr(Float stAr) {
        this.stAr = stAr;
    }

    public Float getMoisture() {
        return moisture;
    }

    public void setMoisture(Float moisture) {
        this.moisture = moisture;
    }

    public Float getAar() {
        return aar;
    }

    public void setAar(Float aar) {
        this.aar = aar;
    }

    public Float getVarS() {
        return varS;
    }

    public void setVarS(Float varS) {
        this.varS = varS;
    }

    public Float getVarD() {
        return varD;
    }

    public void setVarD(Float varD) {
        this.varD = varD;
    }

    public Float getMad() {
        return mad;
    }

    public void setMad(Float mad) {
        this.mad = mad;
    }

    public Float getStAd() {
        return stAd;
    }

    public void setStAd(Float stAd) {
        this.stAd = stAd;
    }

    public Float getVadS() {
        return vadS;
    }

    public void setVadS(Float vadS) {
        this.vadS = vadS;
    }

    public Float getVadD() {
        return vadD;
    }

    public void setVadD(Float vadD) {
        this.vadD = vadD;
    }

    public Float getQgrD() {
        return qgrD;
    }

    public void setQgrD(Float qgrD) {
        this.qgrD = qgrD;
    }

    public Float getStD() {
        return stD;
    }

    public void setStD(Float stD) {
        this.stD = stD;
    }

    public Float getDavS() {
        return davS;
    }

    public void setDavS(Float davS) {
        this.davS = davS;
    }

    public Float getDavD() {
        return davD;
    }

    public void setDavD(Float davD) {
        this.davD = davD;
    }

    public Float getMm() {
        return mm;
    }

    public void setMm(Float mm) {
        this.mm = mm;
    }

    public Float getSt() {
        return st;
    }

    public void setSt(Float st) {
        this.st = st;
    }

    public Float getHgi() {
        return hgi;
    }

    public void setHgi(Float hgi) {
        this.hgi = hgi;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Override
    public String toString() {
        return "CoalQuality{" +
                "purchapplyId=" + purchapplyId +
                ", qnetAr=" + qnetAr +
                ", stAr=" + stAr +
                ", moisture=" + moisture +
                ", aar=" + aar +
                ", varS=" + varS +
                ", varD=" + varD +
                ", mad=" + mad +
                ", stAd=" + stAd +
                ", vadS=" + vadS +
                ", vadD=" + vadD +
                ", qgrD=" + qgrD +
                ", stD=" + stD +
                ", davS=" + davS +
                ", davD=" + davD +
                ", mm=" + mm +
                ", st=" + st +
                ", hgi=" + hgi +
                ", remark='" + remark + '\'' +
                '}';
    }
}
