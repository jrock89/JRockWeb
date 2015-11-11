<!doctype html>
<html class="no-js">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title>JRockWeb | Web Design | Web Development | Saratoga Springs, NY</title>

    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">

    <link rel="shortcut icon" href="images/jrwlogowhite.png">

    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/responsive.css" media="screen and (min-width:150px) and (max-width: 1024px)">


    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="scripts/main.js"></script>
    <script src="scripts/backstretch.js"></script>
    <script src="scripts/waypoints.js"></script>

</head>
<body>

        <!-- Main Section -->
    <section id="all">

        <!-- Intro/first Page -->
        <div id="firstPage">

            <?php
                include('header.php');
            ?>

            <!-- intro page darkened background -->
            <div id="introBackground"></div>

           <!-- intro page HEADLINE -->
            <div id="introInfo">
                 <h3><i>JRock<span style="opacity:0.5">Web</span> brings to you</i></h3>
                <h1>CREATIVE DESIGN, <br> DEVELOPMENT, AND BRANDING.</h1>
            </div>

            <!-- Explore Button -->
            <div id="explore">
                <nav>
                        <a class="arrowOpt1" id="portfolio" href="#onePointFivePage"><div id="">
                            <h1>EXPLORE
                                <!-- <span class="spinArrow"> &#xffec;</span> -->
                            </h1>
                        </div></a>
                </nav>
            </div>
        </div>


        <!-- background for onepointfivepage / secondpage -->
        <div class="backColorOne" style="z-index:2;position:relative;width:100%; background: #312f31;margin:0;">


            <!-- Break Page between intro and second page (onepointfivepage)-->
            <div id="onePointFivePage">
                <h1>"Try to absorb what is useful, discard what is useless, and add what is essentially your own." </br> -Bruce Lee</h1>
            </div>


            <!-- Second Page /  About Page / Who-->
            <div id="secondPage">
                <div class="secondPageBox" >

                    <h1>About</h1>

                    <img class="portPic" src="images/me.png">

                    <div class="me">
                        Hi! My name is Jesse, I am a freelance web developer living in Saratoga Springs, New York.  I love to design and develop beautifuly simple, and effective websites for a user friendly, and fun experience.  As a designer I try to produce something you have seen nowhere else.
                    </div>

                    </br>

                    </br>

                    <hr>

                    <div style="width:100% !important;">

                        <div style="display:inline-block" class="continueReading">
                            <a href=".continueReading">Full Story</a>
                        </div>

                        <div style="display:inline-block" class="resumeBox">
                            <a class="resume" href="../Resume2015.pdf" target="_blank">Résumé</a>
                        </div>

                    </div>

                    <div class="moreMe">My Story</br></br>

                        <img style="width:30px;height30px;margin:0 auto;" src="images/JRockWebLogo.png">

                        </br></br></br>
                        <i style="text-align:center;">Comming soon...</i>
                        </br></br></br>
                        <!-- I am in progress of receiving my Associate's Degree in Information Technology - Computer Networking. I will be receiving this degree next fall(fall 2014). I have learned a great deal over the past two years in my CISCO classes taught by Karen Woodard. CISCO I realize has very little to do with Web Development but the knowledge I have acquired will definitely come in handy no matter the field I fall into. My knowledge gained from per-suing this degree involves configuring routers, switches, setting up small networks, presenting network solutions for school type settings, and so much more. Along side my CISCO courses I took my first programming class, a C++ class, which is what first got me looking at coding and designing.
                        </br>
                        </br>
                        Last summer I worked as an IT intern for Callanan Industries. I worked under Lou Anthony the current IT/System Administrator at the companies Kings Road Main Office corporate location in Albany. While interning for this company, I was able to experience a lot of great real life situations that have improved my future troubleshooting skills. Callanan was updating their outdated phone system to VoIP technology(converging their network) when I first arrived leading to a summer full of VoIP learnings that I could write a whole paper alone about. The internship involved mostly help desk work, which included fixing/mapping printers, formatting computers, installing graphics cards in some computers that required dual displays, and so on.
                        </br>
                        </br>
                        Towards the end of last summer I started to realize I wanted, no needed more creativity in my work. I started to learn code on my own. I have been progressing very fast in my knowledge of HTML5, CSS3, C++, Javascript/JQuery, PHP, along with learning these languages I have been learning technologies such as Google Analytics, GitHub, SublimeText 2/package control, WordPress, SEO/SEM technologies, and much more. There is so much to learn, I try to dedicate a little time each day to learn something new. A few months ago I launched my first website, www.JRockVision.com. I am very excited about the world of Web Development and what it has to offer to me as well what I have to offer to it.
                        </br>
                        </br> -->

                        <a href=".portPic"><div class="closeBox"><i>Close</i></div></a>
                    </div>

                </div>
            </div>





        </div>
        <!-- end of backcolor on onepointfivepage and secondpage -->








<div style="width:100%; background: transparent ;margin:0;">
<!-- #4bc6f0 -->
        <!-- Third page/Works Page -->

<?php
    include('work.php');
?>


</div>

        <!-- Break page between works and contact pages -->
        <div id="threePointFivePage">

            <!-- <img src="images/togalakefade3.png"> -->

            <h1>Stay Connected</h1>

            <hr width="50%">

            <div id="findMeBar">
                <a href="https://www.facebook.com/jrockweb" target="_blank"><div><img class="navFB" src="images/fbwhite.png"></div></a>
                <a href="http://instagram.com/jrockweb" target="_blank"><div><img class="navInsta" src="images/instagramwhite.png"></div></a>
                <a href="https://twitter.com/JesseRock11" target="_blank"><div><img class="navInsta" src="images/twitterwhite.png"></div></a>
                <br>
                <a href="https://www.linkedin.com/pub/jesse-rock/77/a56/9b0" target="_blank"><div><img class="navInsta" src="images/linkedinwhite.png"></div></a>
                <a href="https://github.com/jrock89" target="_blank"><div><img class="navInsta" src="images/githubwhite.png"></div></a>
                <a href="https://www.behance.net/jesserock143b6" target="_blank"><div><img class="navInsta" src="images/behance.png"></div></a>
            </div>


        </div>


        <!-- Forth Page / Contact Page -->
        <div id="forthPage">
            <div class="forthPageBox">
                <!-- <h1 class="tabAbout">Contact</h1> -->
                <h1>Contact</h1>
                <br>
                <br>
                <br>
                <br>
                <br>

                <i>Lets work together, tell me about all your web and design needs!</i>



                <div id="envelope">

                    <form action="contact.php" method="post">
                        <div id="responsive">
                             <input class="detailInput" type="text" Name="name" Placeholder="Name" width="100px;">

                             <input class="detailInput" type="text" Name="email" Placeholder="Email">

                             <textarea style="background:#405249" class="contact-txt-area" id="message" type="text" Name="message" rows="10" cols="15" Placeholder="Message"></textarea>

                             <Input type="submit" Value="Send Message" id="submit">
                        </div>
                    </form>


                </div>

                <?php
                    include('footer.php');
                ?>


            </div>
        </div>
<!-- </div> -->

    </section>
</body>
</html>
