package com.boot.entity;


public class Notify {

  private long notifyId;
  private String notifyTitle;
  private String notifyContent;
  private Integer notifyState;
  private long creatorId;
  private long createTime;
  private long auditorId;
  private long auditTime;
  private Integer readCount;


  public long getNotifyId() {
    return notifyId;
  }

  public void setNotifyId(long notifyId) {
    this.notifyId = notifyId;
  }


  public String getNotifyTitle() {
    return notifyTitle;
  }

  public void setNotifyTitle(String notifyTitle) {
    this.notifyTitle = notifyTitle;
  }


  public String getNotifyContent() {
    return notifyContent;
  }

  public void setNotifyContent(String notifyContent) {
    this.notifyContent = notifyContent;
  }


  public Integer getNotifyState() {
    return notifyState;
  }

  public void setNotifyState(Integer notifyState) {
    this.notifyState = notifyState;
  }


  public long getCreatorId() {
    return creatorId;
  }

  public void setCreatorId(long creatorId) {
    this.creatorId = creatorId;
  }


  public long getCreateTime() {
    return createTime;
  }

  public void setCreateTime(long createTime) {
    this.createTime = createTime;
  }


  public long getAuditorId() {
    return auditorId;
  }

  public void setAuditorId(long auditorId) {
    this.auditorId = auditorId;
  }


  public long getAuditTime() {
    return auditTime;
  }

  public void setAuditTime(long auditTime) {
    this.auditTime = auditTime;
  }

  public Integer getReadCount() {
    return readCount;
  }

  public void setReadCount(Integer readCount) {
    this.readCount = readCount;
  }

  @Override
  public String toString() {
    return "Notify{" +
            "notifyId=" + notifyId +
            ", notifyTitle='" + notifyTitle + '\'' +
            ", notifyContent='" + notifyContent + '\'' +
            ", notifyState='" + notifyState + '\'' +
            ", creatorId=" + creatorId +
            ", createTime=" + createTime +
            ", auditorId=" + auditorId +
            ", auditTime=" + auditTime +
            ", readCount=" + readCount +
            '}';
  }
}
