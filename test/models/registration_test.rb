# == Schema Information
#
# Table name: registrations
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  ticket_id   :integer          not null
#  num_tickets :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class RegistrationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end