
import React, { Component } from "react";
import Note from './note';

class NoteBook extends Component {
    state = { notes: [] };

    nextID = () => {
        let notes = this.state.notes;
        let nextID = (notes[notes.length - 1].ID) + 1;
        return nextID;
    };

    eachNote = (note, _i) => {
        return (
            <Note key={note.ID} index={_i} saveChanges={this.update} removeThis={this.remove} noteID={note.ID}>{note.note}</Note>
        )
    };

    add = () => {
        let notesArray = this.state.notes;
        notesArray.push({
            ID: this.nextID(),
            note: 'یادداشت جدید ..'
        });
        this.setState({ notes: notesArray })
    };

    update = (newText, index) => {
        let notesArray = this.state.notes;
        notesArray[index].note = newText;
        this.setState({ notes: notesArray })
    };

    remove = (index) => {
        let notesArray = this.state.notes;
        notesArray.splice(index, 1);
        this.setState({ notes: notesArray })
    };

    componentDidMount() {
        // Here I supposed that we make a request to the server, and this is the received Response..
        this.setState({
            notes: [
                { ID: 1, note: 'طرح‌نما یا لورم ایپسوم به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا ازنظر گرافیکی نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد.' },
                { ID: 2, note: 'معمولاً طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفاً به مشتری یا صاحب‌کار خود نشان دهند که صفحهٔ طراحی یا صفحه‌بندی شده، بعد از اینکه متن در آن قرار گیرد، چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.' },
                { ID: 3, note: 'در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساساً مورد استفاده قرار گیرد.'},
                { ID: 4, note: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.' },
                { ID: 5, note: 'از آنجایی که بسیاری از طراحان و برنامه نویسان برای تکمیل پروژه های خود و نشان دادن طرح تکمیل شده، نیاز به متن های تستی و آزمایشی دارند، و از آنجایی که تایپ متن های آزمایشی می تواند زمان بسیار زیادی از طراح بگیرد... و زمان را هدر بدهد، از این رو متن های لورم ایپسوم ( Lorem ipsum ) خلق شد' },
                { ID: 6, note: 'در اپلیکیشن موبایل اسنپ فود می‌توانید رستوران‌های اطراف خود را جست و جو کنید و علاوه بر دسترسی به منوی کامل و به روز آن‌ها از دیدگاه سایر مشتریان در مورد غذاهای مختلف مطلع شوید. همچنین می‌توانید تصویر واقعی غذای تحویل گرفته شده توسط دیگران را مشاهده نمایید و از تجربه سفارش آنلاین غذا لذت ببرید.' },
                { ID: 7, note: 'نویسندگان حرفه‌ای، به‌ویژه یادداشت‌نویسان، از همۀ وقت و هنر و توان خود استفاده می‌کنند که در ساده‌ترین و سرراست‌ترین شکل ممکن بنویسند و چندان به زیبانویسی و حواشی دیگر نمی‌اندیشند؛ زیرا می‌دانند که زیباترین جمله‌، ساده‌ترین جمله است.'}]
        });
    };

    render() {
        return (
            <React.Fragment>                
                <span id="hint">{this.state.notes.length} یادداشت ثبت شده ..</span>
                <div className="noteBoard">                    
                    {this.state.notes.map(this.eachNote)}
                    <span><button className="btn-add fa fa-plus" onClick={this.add} title="یادداشت جدید"/></span>
                </div>
            </React.Fragment>
        );
    }
}

export default NoteBook;