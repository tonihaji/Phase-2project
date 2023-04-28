class Booking < ActiveRecord::Base
    belongs_to :rider
    belongs_to :user
    end