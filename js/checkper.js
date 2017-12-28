
function checkPermissions(loginurl) {
    if (sessionStorage.getItem('token') === null) {
        self.location = loginurl;
    } else {
        $.ajax({
            method: "GET",
            url: sever_url + "checkjwt",
            headers: {
                "Authorization": sessionStorage.getItem('token')
            },
            success: function (data, status) {
            },
            error: function (data) {
                self.location = loginurl;
            }
        });
    }
}

function checkFileName() {

}