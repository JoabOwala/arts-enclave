class Art < ApplicationRecord
    belongs_to :collector
    belongs_to :artist

    validates :title, :description, :image_url, presence: true
    validates :price, :year, numericality: true
    validates :medium, inclusion: { in: ['Oil', 'Acrylic', 'Watercolor', 'Mixed Media'] }
    validates :title, length: { maximum: 100 }
    validates :description, length: { maximum: 500 }
    validate :unique_title_within_artist_collection
    validate :associated_records_existence

    private

    def unique_title_within_artist_collection
        if artist&.arts&.where.not(id: id)&.exists?(title: title)
            errors.add(:title, 'must be unique within the artist\'s collection')
        end
    end

    def associated_records_existence
        errors.add(:collector, 'must be associated') unless collector.present?
        errors.add(:artist, 'must be associated') unless artist.present?
    end
end
