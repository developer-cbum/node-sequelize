let loginController = {

    $joinMoveBtn : null,
    $loginBtn : null,
    $email : null,
    $password : null,
    $target : null,
    init : function(target){
        this.$target = target
        this.$joinMoveBtn = target.find('.join-btn')
        this.$loginBtn = target.find('.login-btn')
        this.$email = target.find('#member-email')
        this.$password = target.find('#member-password')
        this.commonEvent();
    },
    commonEvent : function(){
        this.$joinMoveBtn.on("click",(function(){
            location.href =`/join`
        }).bind(this))

        this.$loginBtn.on("click",(function(){
            this.login()
        }).bind(this))
    },
    login : function(){
        let member = {}
        member.memberEmail = this.$email.val();
        member.memberPassword = this.$password.val();

        console.log(member)

        $.ajax({
            url: '/api/member/login',
            type: 'post',
            data: JSON.stringify(member),
            contentType: 'application/json',
            success: function (data) {
              alert("로그인 성공")
              data.loginCheck ? location.href = '/write' : location.href = "/"
            },
            error : function(){
                alert("로그인 실패")
            }
          });
    }
};

(function(){
    const $loginSection = $('#login-section');
    loginController.init($loginSection)

})()