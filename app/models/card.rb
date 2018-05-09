class Card < ActiveRecord::Base
  has_many :card_copies

  def url
    region = 'sa-east-1'
    s3 = Aws::S3::Resource.new(region: region)
    card_bucket = s3.bucket('cards-images')
    card_bucket.object(card_image).presigned_url(:get)
  end
end
