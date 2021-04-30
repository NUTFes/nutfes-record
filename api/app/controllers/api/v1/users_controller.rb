class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
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
