package com.boot.entity;


import java.io.Serializable;

public class Department implements Serializable {

  private long departmentId;
  private String departmentName;
  private String departmentDesc;
  private long departmentPrincipal;

  public long getDepartmentId() {
    return departmentId;
  }

  public void setDepartmentId(long departmentId) {
    this.departmentId = departmentId;
  }

  public String getDepartmentName() {
    return departmentName;
  }

  public void setDepartmentName(String departmentName) {
    this.departmentName = departmentName;
  }

  public String getDepartmentDesc() {
    return departmentDesc;
  }

  public void setDepartmentDesc(String departmentDesc) {
    this.departmentDesc = departmentDesc;
  }

  public long getDepartmentPrincipal() {
    return departmentPrincipal;
  }

  public void setDepartmentPrincipal(long departmentPrincipal) {
    this.departmentPrincipal = departmentPrincipal;
  }

  @Override
  public String toString() {
    return "Department{" +
            "departmentId=" + departmentId +
            ", departmentName='" + departmentName + '\'' +
            ", departmentDesc='" + departmentDesc + '\'' +
            ", departmentPrincipal=" + departmentPrincipal +
            '}';
  }
}
