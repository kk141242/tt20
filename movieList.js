/**
 * Created by xxzx008 on 2017/7/6.
 */
//导入组件
import React, {Component} from 'react';
import {
    ScrollView,
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';
let DataJson = require('./data.json');
let news = DataJson.result.data
class movieListDemo extends Component {

    render() {
        let newsRows = [];
        let imageurl="http://03.imgmini.eastday.com//mobile//20170707//20170707122013_d78ad5aa415e60d57b4a28169059da4f_7_mwpm_03200403.jpeg";

        for (i in news) {
            let varNews = news[i];
            let Row = (
                <View style={styles.row} key={i}>
                    <Image style={ styles.thumbnail} source={{uri:varNews.thumbnail_pic_s}}></Image>
                    <Text>{varNews.title}</Text>
                    <Text>{varNews.author_name}</Text>
                    <Text>{varNews.date}</Text>
                </View>
            )
            newsRows.push(Row);

        }
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollViews}>
                    {newsRows}
                </ScrollView>
            </View>
        )
    }
}
//组件样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",

    },
    scrollViews: {
        marginTop: 25,
        backgroundColor: "#F5FCff"

    },
    row:{
        flexDirection:"row",
        padding:5,
        width:180,
        alignItems:"center"
    },

    thumbnail: {
        width: 80,
        height: 80,
        backgroundColor: "#F5FCff"
    },
    title:
        {

        }




})

//导出自定义组件
export default  class MymovieListDemo extends movieListDemo {
}

