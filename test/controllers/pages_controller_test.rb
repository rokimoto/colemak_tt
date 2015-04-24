require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get loggedin" do
    get :loggedin
    assert_response :success
  end

end
