require 'test_helper'

class IndexControllerTest < ActionDispatch::IntegrationTest
  test "should get test" do
    get index_test_url
    assert_response :success
  end

end
