package com.boot.entity;


import java.io.Serializable;

public class User implements Serializable {

  private Integer id;
  private String name;
  private String username;
  private String phone;
  private String addr;
  private String email;
  private String pwd;
  private Integer role;
  private Integer departmentId;
  private String departmentName;
  private Integer companyId;
  private String companyName;
  private Integer del;

  public String getCompanyName() {
    return companyName;
  }

  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }


  public String getDepartmentName() {
    return departmentName;
  }

  public void setDepartmentName(String departmentName) {
    this.departmentName = departmentName;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getAddr() {
    return addr;
  }

  public void setAddr(String addr) {
    this.addr = addr;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPwd() { return pwd; }

  public void setPwd(String pwd) {
    this.pwd = pwd;
  }

  public Integer getRole() {
    return role;
  }

  public void setRole(Integer role) {
    this.role = role;
  }

  public Integer getDepartmentId() {
    return departmentId;
  }

  public void setDepartmentId(Integer departmentId) {
    this.departmentId = departmentId;
  }

  public Integer getCompanyId() {
    return companyId;
  }

  public void setCompanyId(Integer companyId) {
    this.companyId = companyId;
  }

  public Integer getDel() {
    return del;
  }

  public void setDel(Integer del) {
    this.del = del;
  }

  @Override
  public String toString() {
    return "User{" +
            "id=" + id +
            ", name='" + name + '\'' +
            ", username='" + username + '\'' +
            ", phone='" + phone + '\'' +
            ", addr='" + addr + '\'' +
            ", email='" + email + '\'' +
            ", pwd='" + pwd + '\'' +
            ", role=" + role +
            ", departmentId=" + departmentId +
            ", departmentName='" + departmentName + '\'' +
            ", companyId=" + companyId +
            ", companyName='" + companyName + '\'' +
            ", del=" + del +
            '}';
  }
}
