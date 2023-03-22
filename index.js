
const mainTag = document.querySelector("main");


const Tablet = window.matchMedia("(max-width: 600px)");
const Phone = window.matchMedia("(max-width: 400px)");

document.addEventListener("DOMContentLoaded", () => {

    if (Phone.matches || Tablet.matches) {
        mainTag.innerHTML = `
        <div class="content span-3">
            <h3>Education</h3>
            <div class="title">
                <div class="tag">
                    <h4>Junior High School</h4>
                    <p>2016 - 2020</p>
                    <p>Doña Asuncion Lee Integrated School</p>
                    <p>Xevera Subd., Brgy. Tabun, Mabalacat City, Pampanga</p>
                </div>
                <div class="tag">
                    <h4>Senior High School</h4>
                    <p>2020 - 2022</p>
                    <p>Asian Institute of Science and Technology</p>
                    <p>Mc Arthur Hi-Way, Dau, Mabalacat City, Pampanga</p>
                    <p><strong>Information Communication and Technology</strong></p>
                </div>
                <div>
                    <h4>College</h4>    
                    <p>On Going</p>
                    <p>Mabalacat City College</p>
                    <p>Rizal, Brgy. Dolores, Mabalacat City, Pampanga</p>
                    <p><strong>Bachelor of Science in Information Technology</strong></p>
                </div>
            </div>
        </div>

        <div class="content span-3">
            <h3>Personal Informations</h3>
            <div class="title">
                <h4>Marivic St., Block 9 Lot 16, Xevera Subd., Brgy. Tabun, Mabalacat City, Pampanga</h4>
                <p>Tiglao Medical Center Foundation, Mabalacat City, Pampanga</p>
                <br>
                <p>July 10, 2004</p>
                <p>Filipino</p>
                <p>Male</p>
                <p>MCGI / Christian</p>
                <p>18 yrs old</p>
                <p>English, Tagalog</p>
                <p>Single</p>
            </div>
        </div>

        <div class="content span-3">
            <h3>Awards</h3>
            <div class="title">
                <h4>Asian Institute of Science and Technology 2022</h4>
                <p>Senior High School</p>
                <p>With Honors</p>
                <br>
                <h4>AISAT Film Festival 2022</h4>
                <p>Awards</p>
                <p>Best in Editing</p>
                <p>Best in Cinematography</p>
            </div>
        </div> 
        
        <div class="content span-3">
            <h3>Certificates</h3>
        </div>`
        } else {
            mainTag.innerHTML =`<div class="content span-3">
                                <h3>Education</h3>
                                <div class="title">
                                    <div class="tag">
                                        <p>2019 - 2020</p>
                                        <p>Doña Asuncion Lee Integrated School</p>
                                    </div>
                                    <div class="tag">
                                        <p>2020 - 2022</p>
                                        <p>Asian Institute of Science and Technology</p>
                                    </div>
                                    <div>
                                        <p>On Going</p>
                                        <p>Mabalacat City College</p>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <h4>Junior High School</h4>
                                    <p>Xevera Subd., Brgy. Tabun, Mabalacat City, Pampanga</p>
                                    <br>
                                    <h4>Senior High School</h4>
                                    <p>Mc Arthur Hi-Way, Dau, Mabalacat City, Pampanga</p>
                                    <p><strong>Information Communication and Technology</strong></p>
                                    <br>
                                    <h4>College</h4>
                                    <p>Rizal, Brgy. Dolores, Mabalacat City, Pampanga</p>
                                    <p><strong>Bachelor of Science in Information Technology</strong></p>
                                </div>
                            </div>

                            <div class="content span-3">
                                <h3>Personal Informations</h3>
                                <div class="title">
                                    <p>July 10, 2004</p>
                                    <br>
                                    <p>Filipino</p>
                                    <br>
                                    <p>Male</p>
                                    <br>
                                    <p>MCGI / Christian</p>
                                    <br>
                                    <p>18 yrs old</p>
                                    <br>
                                    <p>English, Tagalog</p>
                                    <br>
                                    <p>Single</p>
                                </div>
                                <div class="content-info">
                                    <h4>Marivic St., Block 9 Lot 16, Xevera Subd., Brgy. Tabun, Mabalacat City, Pampanga</h4>
                                    <p>Tiglao Medical Center Foundation, Mabalacat City, Pampanga</p>
                                </div>
                            </div>

                            <div class="content span-3">
                                <h3>Awards</h3>
                                <div class="title">
                                    <p class="tag">With Honors</p>
                                    <p class="tag">Awards</p>
                                </div>
                                <div class="content-info">
                                    <h4>Asian Institute of Science and Technology 2022</h4>
                                    <p>Senior High School</p>
                                    <br>
                                    <h4>AISAT Film Festival 2022</h4>
                                    <p>Best in Editing</p>
                                    <p>Best in Cinematography</p>
                                </div>
                            </div>
                            
                            <div class="content">
                                <h3>Certificates</h3>
                            </div>`
    }

})