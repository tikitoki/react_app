require 'test_helper'

class ToolsControllerTest < ActionDispatch::IntegrationTest
  test "should get apm_test" do
    get tools_apm_test_url
    assert_response :success
  end

end
