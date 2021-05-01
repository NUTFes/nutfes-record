class Record < ApplicationRecord
  belongs_to :user
  has_one :teacher
end
