
let pagingController ={
    total : null,
    page : 1,
    pageCount : null,
    data : null,
    option : {},
    endPage : null,
    startPage :null,
    realEnd : null,
    pageSize : null,
    $target : null,
    nextPage : null,
    pagingText : "",
    init : function(option){
        this.option = option
        this.$target = option.$target;
        this.total = option.total;
        this.pageSize = option.pageSize;
        this.pageCount = option.pageCount;
        this.page = option.page;
        this.endPage = (Math.ceil(this.page /this.pageCount)*this.pageCount)
        this.startPage = this.endPage - this.pageCount + 1;
        this.realEnd = Math.ceil(this.total / this.pageSize)
        this.createPagination();

        console.log(this.startPage)
    },
    createPagination : function(){
        this.pagingText = "";
        this.$target.find('#paging-wrap').html(``);

        if(this.realEnd < this.endPage){
            this.endPage = this.realEnd == 0 ? 1 : this.realEnd;
        }

        this.nextPage = Math.ceil((this.page)/this.pageCount)*this.pageCount +1;

        if(this.startPage >1){
            this.pagingText += `<li class="page-item prev-btn"><button type="button" class="page-link"><</button></li>`
        }

        for (let i =this.startPage; i <= this.endPage; i++){
            if(this.page == i){
                this.pagingText += `<li class="page-item active"><button type="button" class="page-link">${i}</button></li>`
            }else{
                this.pagingText += `<li class="page-item"><button type="button" class="page-link">${i}</button></li>`
            }
        }


        if(this.endPage < this.realEnd){
            this.pagingText += `<li class="page-item next-btn"><button type="button" class="page-link">></button></li>`
        }
        this.$target.find('#paging-wrap').html(this.pagingText);
    }
}