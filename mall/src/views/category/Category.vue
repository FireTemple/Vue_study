<template>
  <div class="wrapper">
    <ul class="content">
      <ul>列表1</ul>
      <ul>列表2</ul>
      <ul>列表3</ul>
      <ul>列表4</ul>
      <ul>列表5</ul>
      <ul>列表6</ul>
      <ul>列表7</ul>
      <ul>列表8</ul>
      <ul>列表9</ul>
      <ul>列表10</ul>
      <ul>列表11</ul>
      <ul>列表12</ul>
      <ul>列表13</ul>
      <ul>列表14</ul>
      <ul>列表15</ul>
      <ul>列表16</ul>
      <ul>列表17</ul>
      <ul>列表18</ul>
      <ul>列表19</ul>
      <ul>列表20</ul>
      <ul>列表21</ul>
      <ul>列表22</ul>
      <ul>列表23</ul>
      <ul>列表24</ul>
      <ul>列表25</ul>
      <ul>列表26</ul>
      <ul>列表27</ul>
      <ul>列表28</ul>
      <ul>列表29</ul>
      <ul>列表30</ul>
      <ul>列表31</ul>
      <ul>列表32</ul>
      <ul>列表33</ul>
      <ul>列表34</ul>
      <ul>列表35</ul>
      <ul>列表36</ul>
      <ul>列表37</ul>
      <ul>列表38</ul>
      <ul>列表39</ul>
      <ul>列表40</ul>
      <ul>列表41</ul>
      <ul>列表42</ul>
      <ul>列表43</ul>
      <ul>列表44</ul>
      <ul>列表45</ul>
      <ul>列表46</ul>
      <ul>列表47</ul>
      <ul>列表48</ul>
      <ul>列表49</ul>
      <ul>列表50</ul>
      <ul>列表51</ul>
      <ul>列表52</ul>
      <ul>列表53</ul>
      <ul>列表54</ul>
      <ul>列表55</ul>
      <ul>列表56</ul>
      <ul>列表57</ul>
      <ul>列表58</ul>
      <ul>列表59</ul>
      <ul>列表60</ul>
      <ul>列表61</ul>
      <ul>列表62</ul>
      <ul>列表63</ul>
      <ul>列表64</ul>
      <ul>列表65</ul>
      <ul>列表66</ul>
      <ul>列表67</ul>
      <ul>列表68</ul>
      <ul>列表69</ul>
      <ul>列表70</ul>
      <ul>列表71</ul>
      <ul>列表72</ul>
      <ul>列表73</ul>
      <ul>列表74</ul>
      <ul>列表75</ul>
      <ul>列表76</ul>
      <ul>列表77</ul>
      <ul>列表78</ul>
      <ul>列表79</ul>
      <ul>列表80</ul>
      <ul>列表81</ul>
      <ul>列表82</ul>
      <ul>列表83</ul>
      <ul>列表84</ul>
      <ul>列表85</ul>
      <ul>列表86</ul>
      <ul>列表87</ul>
      <ul>列表88</ul>
      <ul>列表89</ul>
      <ul>列表90</ul>
      <ul>列表91</ul>
      <ul>列表92</ul>
      <ul>列表93</ul>
      <ul>列表94</ul>
      <ul>列表95</ul>
      <ul>列表96</ul>
      <ul>列表97</ul>
      <ul>列表98</ul>
      <ul>列表99</ul>
      <ul>列表100</ul>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll('.wrapper', {
        probeType: 2,
        pullUpLoad: true
      });

      this.scroll.on('scroll', (position) => {
        // console.log(position);
      });
      this.scroll.on('pullingUp', () =>{
        console.log("======================");
      })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;

    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>
