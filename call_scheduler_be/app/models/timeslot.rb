class Timeslot < ApplicationRecord
    # Associations
    belongs_to :coach, class_name: 'User', foreign_key: 'coach_id'
    belongs_to :student, class_name: 'User', foreign_key: 'student_id', optional: true
    # Validations
    validates :start, presence: true
    validates :end, presence: true
    validates :coach_id, presence: true
end
