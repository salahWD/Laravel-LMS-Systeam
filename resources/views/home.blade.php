@extends('layout')

@section('meta')
    <title>{{ __(config('app.name')) . ' | ' . __('Home') }}</title>
@endsection

@section('styles')
    <!-- STYLES -->
    @vite(['resources/css/home.css'])
@endsection

@section('content')

    <section class="hero-section section">
        <div id="particles-js"></div>
        {{-- <div class="bg"> --}}
        <div class="bg"></div>
        {{-- </div> --}}
        <div class="shape-1 shape"></div>
        <div class="shape-2 shape"></div>
        <div class="content">
            <h2 class="title">تعلم بهمّة ... فالمستقبل ينتظرك
                <span class="star-1 star">
                    <svg data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z">
                        </path>
                    </svg>
                </span>
            </h2>
            <p class="lead">نحو جيل هندسي مبدع</p>
            <a href="#learn" class="btn btn-light">أريد البدء بالتعلم</a>
        </div>
        <div class="position-absolute bottom-0 start-0 end-0 z-1" style="margin-bottom: -5px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="267" viewBox="0 0 1613 224" fill="none"
                style="width: 100%;height: fit-content;">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0 85.0547C0 85.0547 228.2 199.895 384.1 190.602C540 181.309 633.391 143.004 804.696 162.156C976 181.309 1472.86 132.989 1612.8 0V223.758H0V85.0547Z"
                    fill="#FDFDFF" style="fill: white;"></path>
            </svg>
        </div>
    </section>
    <section class="about-walid">
        <div class="container mb-8 mb-lg-13">
            <div class="row align-items-center">
                <div class="col-12 col-lg-6 col-xl-7"><img class="img-fluid"
                        src="https://themewagon.github.io/brainwave-io/v1.0.0/assets/img/Hero/Team.webp" alt="">
                </div>
                <div class="col-12 col-lg-6 col-xl-5">
                    <div class="row justify-content-center justify-content-lg-start">
                        <div class="col-sm-10 col-md-8 col-lg-12">
                            <h2 class="title fs-4 fs-lg-3 fw-bold mb-2 text-center text-lg-start">
                                {{ __('An elite group of professional teachers') }}.
                            </h2>
                            <p class="desc fs-8 mb-3 mb-lg-4 lh-lg text-center text-lg-start fw-normal">
                                {{ __('We seek to educate a generation of professional engineers') }}</p>
                        </div>
                        <div class="col-12">
                            <div class="mb-x1 mb-lg-2">
                                <h5 class="fs-8 fw-bold lh-lg mb-1">{{ __('Open source Projects and materials') }}</h5>
                                <p class="mb-0 lh-xl">
                                    {{ __('you can use the material we offer and as a part of the courses and articles we publish') }}.
                                </p>
                            </div>
                            <div>
                                <h5 class="fs-8 fw-bold lh-lg mb-1">{{ __('Free & Paid Courses and Certificates') }}</h5>
                                <p class="lh-xl mb-0">
                                    {{ __('we care a lot of our quality and our courses and certificates, some of which is free') }}.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section learn-section" id="learn">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="title">لنتعلم ونستفيد من المنصة</h2>
                    <p class="lead">نقدم في هذه المنصة مسارات تعليمية تشمل الأساسيات والمفاهيم المهمة وتوصلك لمرحلة تستطيع
                        فيها تصميم دوائر الكترونية متقدمة.<br>
                        <b>لكن تلك ليست نهاية الرحلة التعليمية, بل مجرد البداية</b><br>تستطيع متابعة أحدث الأخبار والتقنيات
                        وأفكار المشاريع بشكل يومي عن طريق المقالات والتحديثات القادمة على منصة <bdi>Eletorial</bdi>
                    </p>
                </div>
                <div class="col-md-6">
                    <img src="https://placehold.it/600x400" alt="">
                </div>
            </div>
        </div>
    </section>
    <section class="section aboutus-section">
        <div class="container">
            <div class="text-center">
                <h2 class="title">نحو جيل هندسي مبدع</h2>
                <p class="lead">هي فكرة وهدف ومبادرة تسعى لتطوير وتنمية العلوم باللغة العربية, المقصود منها هو أنتم وليس
                    الغرب, هم لديهم مصادرهم وجامعاتهم.<br>والمستفيد هو كل هاوٍ أو طالب حتى المتخصصين يستفيدون من متابعة اخر
                    التطورات في المجال</p>
            </div>
        </div>
    </section>
    <section class="section courses-section">
        <div class="container">
            <h2 class="title">تصفح المسارات التعليمية</h2>
            <p class="lead">نبذة عن المسارات التعليمية المطروحة في منصة {{ config('app.name') }}.</p>
            <div class="row mt-5">
                @if (isset($featuredCourses))
                    @foreach ($featuredCourses as $course)
                        <div class="col-md-4 col-sm-6">
                            <a href="{{ route('course_show', $course->id) }}" class="courseBrief card">
                                <div class="card-image courseBriefImg">
                                    <div class="fullBlueLayer"></div>
                                    <img loading="lazy" class="lazyload" alt="{{ $course->title }}"
                                        src="{{ $course->image_url() }}">
                                </div>
                                <div class="card-content courseBriefContent">
                                    <h4 class="card-title courseBriefTitle">{{ $course->title }}</h4>
                                    <p class="coursePrice"><span>{{ $course->show_price() }}</span></p>
                                    <p class="courseDescription">{{ $course->description }}</p>
                                </div>
                            </a>
                        </div>
                    @endforeach
                @endif
            </div>
        </div>
    </section>
    <section class="section courses-section">
        <div class="container">
            <h2 class="title">أحدث المقالات</h2>
            <p class="lead">معرفة الجديد أولاً بأول وتتبع النقاشات والمواضيع الهامة هي إحدى الميزات اللتي نقدمها في منصة
                <bdi>{{ config('app.name') }}</bdi>
            </p>
            <div class="row mt-5">
                @if (isset($latestArticles))
                    @foreach ($latestArticles as $article)
                        <div class="col-sm-6 col-md-4">
                            <div class="post post-grid rounded bordered">
                                <div class="thumb top-rounded">
                                    @if ($article->category_id)
                                        <a class='category-badge position-absolute'
                                            href='{{ route('category_show', $article->category_id) }}'>{{ $article->category->title }}</a>
                                    @endif
                                    <a href='{{ route('article_show', $article->id) }}'>
                                        <div class="inner">
                                            <img loading="lazy" class="article-image" src="{{ $article->image_url() }}"
                                                alt="{{ __('post-title') }}" />
                                        </div>
                                    </a>
                                </div>
                                <div class="details">
                                    <ul class="meta list-inline mb-0">
                                        <li class="list-inline-item"><a href="#">
                                                <img loading="lazy" src="{{ $article->user?->image_url() }}"
                                                    class="author rounded-circle" alt="{{ __('author') }}" />
                                                {{ $article->user?->fullname() }}</a>
                                        </li>
                                        <li class="list-inline-item">{{ $article->created_at->format('Y-m-d') }}</li>
                                    </ul>
                                    <h5 class="post-title mb-3 mt-3"><a
                                            href='{{ route('article_show', $article->id) }}'>{{ $article->title }}</a>
                                    </h5>
                                    <p class="excerpt mb-0">{{ $article->description }}</p>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @endif
            </div>
        </div>
    </section>

@endsection

@section('scripts')
    <!-- JAVA SCRIPTS -->
    <script src="{{ url('js/jquery.min.js') }}"></script>
    <script src="{{ url('js/popper.min.js') }}"></script>
    <script src="{{ url('js/bootstrap.min.js') }}"></script>
    <script src="{{ url('js/slick.min.js') }}"></script>
    <script src="{{ url('js/jquery.sticky-sidebar.min.js') }}"></script>
    <script src="{{ url('js/particles.min.js') }}"></script>
    <script src="{{ url('js/custom.js') }}"></script>
    <script>
        particlesJS.load('particles-js', 'js/particles.json', function() {
            console.log('callback - particles.js config loaded');
        });
    </script>
@endsection
