class User < ApplicationRecord
    has_secure_password
    has_many :artworks

    validates :username, presence: true, uniqueness: true
end
