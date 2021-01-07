package com.boot.entity;


import java.io.Serializable;

public class Company implements Serializable {

  private long companyId;
  private String companyName;
  private int userId;
  private String phone;
  private String email;
  private int parentCompanyId;

  public long getCompanyId() {
    return companyId;
  }

  public void setCompanyId(long companyId) {
    this.companyId = companyId;
  }

  public String getCompanyName() {
    return companyName;
  }

  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public int getParentCompanyId() {
    return parentCompanyId;
  }

  public void setParentCompanyId(int parentCompanyId) {
    this.parentCompanyId = parentCompanyId;
  }

  @Override
  public String toString() {
    return "Company{" +
            "companyId=" + companyId +
            ", companyName='" + companyName + '\'' +
            ", userId=" + userId +
            ", phone='" + phone + '\'' +
            ", email='" + email + '\'' +
            ", parentCompanyId=" + parentCompanyId +
            '}';
  }
}
