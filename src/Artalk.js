import './css/main.scss'
import Editor from './components/Editor'
import List from './components/List'
import $ from 'jquery'
import marked from 'marked'
import hanabi from 'hanabi'

const defaultOpts = {
  el: '',
  placeholder: '来啊，快活啊 (/ω＼)',
  defaultAvatar: '',
  pageSize: 50,
  pageKey: '',
  emoticons: require('./assets/emoticons.json'),
  serverUrl: '',
  gravatar: {
    cdn: 'https://gravatar.loli.net/avatar/'
  }
}

class Artalk {
  constructor (opts) {
    // 配置
    this.opts = defaultOpts
    this.opts = Object.assign(this.opts, opts)
    // 默认头像
    if (this.opts.defaultAvatar) {
      this.opts.defaultAvatar = `mp`
    }

    this.init()
  }

  init () {
    this.el = $(this.opts.el)
    if (!this.el.length) {
      throw Error(`Sorry, Target element "${this.opts.el}" was not found.`)
    }
    this.el.addClass('artalk')
    this.showLoding()

    this.initMarked()
    this.editor = new Editor(this)
    this.list = new List(this)

    this.hideLoading()
  }

  initMarked () {
    this.marked = marked

    this.marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: (code) => {
        return hanabi(code)
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: true,
      sanitize: true, // 净化
      smartLists: true,
      smartypants: true,
      xhtml: false
    })
  }

  showLoding () {
    let loadingElem = $('.artalk-loading')
    if (!loadingElem.length) {
      loadingElem = $(`<div class="artalk-loading" style="display: none;"><div class="artalk-loading-spinner"><svg viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle></svg></div></div>`).appendTo(this.el)
    }
    loadingElem.css('display', '')
  }

  hideLoading () {
    let loadingElem = $('.artalk-loading')
    loadingElem.css('display', 'none')
  }
}

export default Artalk