class Artist < ApplicationRecord
    has_many :arts
    has_many :collectors, through: :arts

    # validates :name, presence: true
    # validates :bio, length: { maximum: 200 }
end
