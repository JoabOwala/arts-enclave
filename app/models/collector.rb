class Collector < ApplicationRecord
    has_many :arts
    has_many :artists, through: :arts

    # validates :name, presence: true
    # validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
