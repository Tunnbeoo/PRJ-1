<style>
    .info-section .info-paragraph {
        color: black;
        font-size: 16px;
    }
    .info-section .info-list {
        color: black;
        font-size: 14px;
    }
    .info-list li {
        list-style: disc;
        margin-left: 20px;
    }
    .photo-container img {
    width: 100%; /* Adjust the width as needed */
    max-width: 400px; /* Set a maximum width */
    height: auto; /* Maintain aspect ratio */
}
.team-photo {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.team-photo img {
    width: 100%;
    height: auto;
    object-fit: cover; /* Ensures the image covers the container without distortion */
    border-radius: 50%; /* Makes the image circular */
}
.team-carousel .team-member-item {
    width: 20%; /* Each item takes up 20% of the container */
    float: left; /* Ensure items are aligned horizontally */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    height: 470px; /* Set a fixed height to match the width */
    overflow: hidden; /* Hide any overflow content */
}

.team-member {
    height: 100%; /* Ensure the team member content fills the item */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>


<!-- Start page content -->
<section id="page-content" class="page-wrapper section">

    <!-- ABOUT SECTION START -->
    <div class="about-section mb-80">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-header text-start">
                        <h2 class="uppercase">About Xgarden Store</h2>
                        <h6 class="mb-40"></h6>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <div class="photo-container p-10 bg-img-1">
                        <img src="assets/images/banner/about-us.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="mt-20 info-section">
                        <p class="info-paragraph">Hệ thống bán lẻ Xgarden Store là một trong những điểm đến tin cậy của người tiêu dùng thông thái bắt nguồn từ diễn đàn mua bán - diễn đàn công nghệ lớn nhất Việt Nam.</p>

                        <p class="info-paragraph">Với tinh thần bán hàng trung thực, hài hước, lấy 4 đối tượng sản phẩm, khách hàng, chất lượng dịch vụ, nhân sự làm trọng tâm, chúng tôi cực kì chú trọng đến xây dựng quy trình cung cấp dịch vụ chuẩn, không ngừng nâng cấp để:</p>

                        <ul class="info-list">
                            <li>Luôn nhập được hàng tốt với giá đầu vào tốt, các sản phẩm được kiểm tra kĩ càng bởi đội ngũ kiểm tra chất lượng chuẩn trước khi bán ra.</li>
                            <li>Luôn làm hài lòng khách hàng về giá bán, thời gian phục vụ nhanh chóng, và giải quyết thỏa đáng các vấn đề trong bảo hành.</li>
                        </ul>

                        <p class="info-paragraph">Chúng tôi lấy khách hàng làm trung tâm, lấy tổ chức chức chuyên nghiệp làm sức mạnh cạnh tranh, không ngừng nỗ lực cung cấp những sản phẩm, dịch vụ giá trị mới, chất lượng cao với giá hợp lý để đóng góp vào mục tiêu nâng cao chất lượng cuộc sống thông tin.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ABOUT SECTION END -->

    <!-- TEAM SECTION START -->
    <div class="team-section mb-50">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-header text-start">
                        <h2 class="uppercase">Team Member</h2>
                        <h6 class="mb-40"></h6>
                    </div>
                    <div class="team-carousel section">
                        <!-- team-member start -->
                        <div class="team-member-item">
                            <div class="team-member box-shadow">
                                <div class="team-photo">
                                    <img src="assets/img/team/tunn.jpeg" alt="">
                                </div>
                                <div class="team-info pt-20">
                                    <h5 class="member-name"><a href="#!">Minh Trung</a></h5>
                                    <p class="member-role">Leader</p>
                                    <p class="mb-20">Là người phụ trách quản lý công việc và phân chia các thành viên, là người chịu trách nhiệm chính về back-end, thiết kế database</p>
                                </div>
                            </div>
                        </div>
                        <!-- team-member end -->
                        <!-- team-member start -->
                        <div class="team-member-item">
                            <div class="team-member box-shadow">
                                <div class="team-photo">
                                    <img src="assets/img/team/" alt="">
                                </div>
                                <div class="team-info pt-20">
                                    <h5 class="member-name"><a href="#!">Thành Mỹ</a></h5>
                                    <p class="member-role">Member</p>
                                    <p class="mb-20">là người lên ý tưởng, thiết kế UX/UI của Xgarden Store</p>
                                </div>
                            </div>
                        </div>
                        <!-- team-member end -->
                        <!-- team-member start -->
                        <div class="team-member-item">
                            <div class="team-member box-shadow">
                                <div class="team-photo">
                                    <img src="assets/img/team/" alt="">
                                </div>
                                <div class="team-info pt-20">
                                    <h5 class="member-name"><a href="#!">Thanh Thiên</a></h5>
                                    <p class="member-role">Member</p>
                                    <p class="mb-20">Là người chịu trách nhiệm về thiết kế trang giao diện front-end, thiết kế UX/UI của Xgarden Store</p>
                                </div>
                            </div>
                        </div>
                        <!-- team-member end -->
                        <!-- team-member start -->
                        <div class="team-member-item">
                            <div class="team-member box-shadow">
                                <div class="team-photo">
                                    <img src="assets/img/team/" alt="">
                                </div>
                                <div class="team-info pt-20">
                                    <h5 class="member-name"><a href="#">Hữu Tài</a></h5>
                                    <p class="member-role">Member</p>
                                    <p class="mb-20">Là người phụ trách về back-end, thiết kế database</p>
                                </div>
                            </div>
                        </div>
                        <!-- team-member end -->
                        <!-- team-member start -->
                        <div class="team-member-item">
                            <div class="team-member box-shadow">
                                <div class="team-photo">
                                    <img src="assets/img/team/" alt="">
                                </div>
                                <div class="team-info pt-20">
                                    <h5 class="member-name"><a href="#">Vũ Hùng</a></h5>
                                    <p class="member-role">Member</p>
                                    <p class="mb-20">Là người phụ trách công việc thiết kế trang giao diện front-end, thiết kế UX/UI của Xgarden Store</p>
                                </div>
                            </div>
                        </div>
                        <!-- team-member end -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- TEAM SECTION END -->
</section>
<!-- End page content -->