console.log('연결됌');

let joinController = {
  param: {},
  $target: null,
  //이름태그
  $name: null,
  //이메일 주소 태그
  $email: null,
  //비밀번호 태그
  $password: null,
  //비밀번호 확인 태그
  $checkPassword: null,
  //로그인 버튼
  $loginBtn: null,
  //회원가입 버튼
  $joinBtn: null,
  //통과
  $passTags: null,
  //불통과
  $notPassTags: null,
  nameFlag: false,
  emailFlag: false,
  passwordFlag: false,
  init: function (target) {
    this.$target = target;
    this.$name = $('#member-name');
    this.$email = $('#member-email');
    this.$password = $('#member-password');
    this.$checkPassword = $('#check-member-password');
    this.$loginBtn = $('.login-btn');
    this.$joinBtn = $('.join-btn');
    this.$passTags = $('.valid-feedback');
    this.$notPassTags = $('.invalid-feedback');
    this.commonEvent(target);
  },
  commonEvent: function (target) {
    target.find('.join-btn').on('click',(function () {
        this.join();
      }).bind(this));

    this.$email.on('input',(function () {
        this.emailCheck();
        if (!this.emailCheck()) {
          this.checkId();
        }
        this.joinCheck();}).bind(this));

    //이름에 특수문자금지
    this.$name.bind('input',(function () {
        re = /[~!@\#$%^&*\()\-=+_']/gi;
        let temp = this.$name.val();
        if (re.test(temp)) {
          //특수문자가 포함되면 삭제하여 값으로 다시셋팅
          this.$name.val(temp.replace(re, ''));
        }

        if (temp != '') {
          this.$passTags.eq(0).text(`환영합니다`).show();
          this.$notPassTags.eq(0).hide();
          this.nameFlag = true;
        } else {
          this.$notPassTags.eq(0).text('이름을 입력해주세요').show();
          this.$passTags.eq(0).hide();
          this.nameFlag = false;
        }
        this.joinCheck();
      }).bind(this));

    //비밀번호 검사
    this.$password.on('input',(function () {
        if (this.nullPassword()) {
          this.$passTags.eq(2).text(`비밀번호 입력완료`).show();
          this.$notPassTags.eq(2).hide();
          this.passwordFlag = true;
        } else {
          this.$notPassTags.eq(2).text('비밀번호를 입력해주세요').show();
          this.$passTags.eq(2).hide();
          this.passwordFlag = false;
        }
        this.samePassword(this.sameCheckPassword());
      }).bind(this));

    //비밀번호 확인
    this.$checkPassword.on('input',(function () {
        if (!this.nullCheckPassword()) {
          this.$notPassTags.eq(3).text('비밀번호 확인를 입력해주세요').show();
          this.$passTags.eq(3).hide();
        }
        this.samePassword(this.sameCheckPassword());
      }).bind(this));
  },
  getParam: function () {
    this.param = {};
    this.$target.find('input').each((i, tag) => {
      this.param[$(tag).attr('name')] = $(tag).val();
    });
  },
  saveRequest: function () {
    let param = this.getParam();
  },
  fn_emailChk: function (email) {
    let regExp = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{1,4}$/;
    if (!regExp.test(email)) {
      return false;
    }
    return true;
  },
  emailCheck: function () {
    if (!this.fn_emailChk(this.$email.val())) {
      this.$notPassTags.eq(1).text('올바른 이메일 형식을 입력해 주세요').show();
      this.$passTags.eq(1).hide();
      return true;
    }
    return false;
  },
  joinCheck: function () {
    if (
      this.nameFlag &&
      this.emailFlag &&
      this.passwordFlag &&
      this.nullCheckPassword() &&
      this.nullPassword()
    ) {
      this.$joinBtn.prop('disabled', false);
    } else {
      this.$joinBtn.prop('disabled', true);
    }
  },
  nullCheckPassword: function () {
    if (this.$checkPassword.val() == '') {
      return false;
    }
    return true;
  },
  nullPassword: function () {
    if (this.$password.val() == '') {
      return false;
    }
    return true;
  },
  checkId: function () {
    let memberEmail = this.$email.val();
    let self = this;
    $.ajax({
      url: '/api/member/check',
      type: 'post',
      data: JSON.stringify({ memberEmail: memberEmail }),
      contentType: 'application/json',
      success: function (data) {
        console.log(data)
        if (data.length < 1) {
          self.$passTags.eq(1).text('멋진 이메일이네요').show();
          self.$notPassTags.eq(1).hide();
          self.emailFlag = true;
        } else {
          self.$notPassTags.eq(1).text('중복된아이디입니다').show();
          self.$passTags.eq(1).hide();
          self.emailFlag = false;
        }
      },
      error : function(e){
        console.log(e)
      }
    });
  },
  join: function () {
    let member = {}
    member.member_email = this.$email.val();
    member.member_name = this.$name.val();
    member.member_password = this.$password.val();

    $.ajax({
      url: '/api/member',
      type: 'post',
      data: JSON.stringify(member),
      contentType: 'application/json',
      success: function (data) {
        console.log(data)
        alert("회원 가입 성공")
        location.href = `/login`
      },
    });
  },
  sameCheckPassword: function () {
    if (this.$password.val() != this.$checkPassword.val()) {
      return false;
    }
    return true;
  },
  samePassword: function (callback) {
    if (callback) {
      this.$passTags.eq(3).text(`비밀번호가 일치합니다`).show();
      this.$notPassTags.eq(3).hide();
      this.passwordFlag = true;
    } else {
      this.$notPassTags.eq(3).text('비밀번호 불일치합니다').show();
      this.$passTags.eq(3).hide();
      this.passwordFlag = false;
    }
    this.joinCheck();
  },
};

(function () {
  const $target = $('#join-section');

  joinController.init($target);
})();
