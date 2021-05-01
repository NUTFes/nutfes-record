class Record < ApplicationRecord
  belongs_to :user
  has_one :teacher, dependent: :destroy
end
