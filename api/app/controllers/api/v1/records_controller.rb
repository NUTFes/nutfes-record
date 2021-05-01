class Api::V1::RecordsController < ApplicationController
  def get_records
    user = User.find(params[:id])
    records = user.records
    render json: records
  end

  def get_record
    record = Record.find(params[:id])
    teacher = record.teacher.user.name
    render json: 
      { 
      record: record, 
      teacher: teacher
      }
  end

end
