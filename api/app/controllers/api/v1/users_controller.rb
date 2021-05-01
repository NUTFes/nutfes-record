class Api::V1::UsersController < ApplicationController
  def get_role_1
    users = User.where(role_id: 1)
    render json: users
  end

  def get_role_2
    users = User.where(role_id: 2)
    render json: users
  end

  def show
    user = User.find(params[:id])
    department = user.department.name
    grade = user.grade.name
    user = {
      user: user,
      department: department,
      grade: grade,
    }
    render json: user
  end
end
