class User < ApplicationRecord
    # Associations
    has_many :timeslots

    #Validations
    validates :phone, presence: true
    validates :role, inclusion: { in: ['COACH', 'STUDENT']}
end
