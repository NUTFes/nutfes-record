class Curriculum < ApplicationRecord
  belongs_to :group
  has_many :records
end
